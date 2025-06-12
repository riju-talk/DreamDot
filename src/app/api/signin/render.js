import React from 'react';

export function EmailTemplate ({ firstName, OTP }){
    return(
    <div
        style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            backgroundColor: "#f4f4f4",
            padding: "20px",
            margin: "0",
        }}
    >
        <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            style={{ margin: "0 auto", maxWidth: "600px" }}
        >
            <tr>
                <td align="center">
                    <table
                        width="100%"
                        cellPadding="20"
                        cellSpacing="0"
                        style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "8px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            border: "1px solid #e0e0e0",
                        }}
                    >
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                <h1 style={{ color: "#333", marginBottom: "10px" }}>
                                    Hello, {firstName}!
                                </h1>
                                <p style={{ fontSize: "16px", color: "#555", marginBottom: "30px" }}>
                                    We received a request to access your account.
                                    <br />
                                    Your One Time Password (OTP) is shown below:
                                </p>
                                <div style={{ margin: "20px 0" }}>
                                    <span
                                        style={{
                                            display: "inline-block",
                                            padding: "15px 30px",
                                            fontSize: "24px",
                                            letterSpacing: "4px",
                                            backgroundColor: "#e9ecef",
                                            borderRadius: "4px",
                                            color: "#333",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {OTP}
                                    </span>
                                </div>
                                <p style={{ fontSize: "14px", color: "#999", marginTop: "30px" }}>
                                    If you did not request this OTP, please ignore this email or contact our support.
                                </p>
                                <p style={{ fontSize: "14px", color: "#999", marginTop: "10px" }}>
                                    Thank you,
                                    <br />
                                    The Support Team
                                </p>
                            </td>
                        </tr>
                    </table>
                    <p style={{ fontSize: "12px", color: "#999", marginTop: "20px" }}>
                        © {new Date().getFullYear()} DreamDot. All rights reserved.
                    </p>
                </td>
            </tr>
        </table>
    </div>
)};
