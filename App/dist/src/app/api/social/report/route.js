// report.js
import { prismaSocial } from "../../../../lib/db/client";
import { validate } from "uuid";
// POST: Create a report record (i.e. report a user or a post)
export async function POST(request) {
    try {
        const { reporter_id, reported_user_id, post_id, reason } = await request.json();
        if (!reporter_id || !reason) {
            return new Response(JSON.stringify({ error: "reporter_id and reason are required" }), { status: 400 });
        }
        // At least one of reported_user_id or post_id must be provided.
        if (!reported_user_id && !post_id) {
            return new Response(JSON.stringify({ error: "Either reported_user_id or post_id must be provided" }), { status: 400 });
        }
        if (!validate(reporter_id) ||
            (reported_user_id && !validate(reported_user_id)) ||
            (post_id && !validate(post_id))) {
            return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
        }
        const report = await prismaSocial.reported_content.create({
            data: {
                reporter_id,
                reported_user_id: reported_user_id || null,
                post_id: post_id || null,
                reason,
                status: "pending",
            },
        });
        return new Response(JSON.stringify(report), { status: 201 });
    }
    catch (error) {
        console.error("POST /report error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
// DELETE: Remove a report record (by report ID)
export async function DELETE(request) {
    try {
        const { reporter_id, report_id } = await request.json();
        if (!reporter_id || !report_id) {
            return new Response(JSON.stringify({ error: "reporter_id and report_id are required" }), { status: 400 });
        }
        if (!validate(reporter_id) || !validate(report_id)) {
            return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
        }
        // Ensure that the reporter_id matches the report before deletion if needed.
        const report = await prismaSocial.reported_content.findUnique({
            where: { id: report_id },
        });
        if (!report) {
            return new Response(JSON.stringify({ error: "Report not found" }), { status: 404 });
        }
        // Optionally verify that report.reporter_id === reporter_id
        if (report.reporter_id !== reporter_id) {
            return new Response(JSON.stringify({ error: "Not authorized to delete this report" }), { status: 403 });
        }
        const deletedReport = await prismaSocial.reported_content.delete({
            where: { id: report_id },
        });
        return new Response(JSON.stringify({ message: "Report removed", report: deletedReport }), { status: 200 });
    }
    catch (error) {
        console.error("DELETE /report error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
//# sourceMappingURL=route.js.map