'use server';
import { prismaAudit } from "../../../lib/db/client";

type Props = {
    recipientId: string;
};

export async function logCreatorNotification({ recipientId }: Props) {
    try {
        const message = `${recipientId} ! You have been granted creator privileges.`;

        const newNotification = await prismaAudit.notification_log.create({
            data: {
                recipient_id: recipientId,
                message,
                is_read: false, // Optional, as default is false
            },
        });

        console.log('[Audit] Notification logged for creator:', newNotification.id);

        return {
            success: true,
            message: 'Notification logged successfully.',
        };
    } catch (error) {
        console.error('[Audit Error] Failed to log creator notification:', error);
        return {
            success: false,
            message: 'Failed to log notification.',
        };
    }
}
