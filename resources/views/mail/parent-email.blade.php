<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Enrollment Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 0;">

    <div style="height: 40px;"></div>

    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center">
                <table width="600" cellpadding="20" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td>
                            <h2 style="color: #333333; margin-top: 0;">Enrollment Confirmation</h2>

                            <p style="font-size: 16px; color: #555555;">
                                Dear <strong>{{ $name }}</strong>,
                            </p>

                            <p style="font-size: 16px; color: #555555;">
                                Thank you for enrolling your child at <strong>Cyberland School</strong>. We have received your submission successfully.
                            </p>

                            <p style="font-size: 16px; color: #555555;">
                                Our admissions team will review your application and contact you soon with the next steps.
                            </p>

                            <p style="font-size: 16px; color: #555555;">
                                Best regards,<br>
                                <strong>Cyberland School Admissions Team</strong>
                            </p>
                        </td>
                    </tr>
                </table>

                <p style="font-size: 12px; color: #999999; margin-top: 20px;">
                    © {{ date('Y') }} Cyberland School. All rights reserved.
                </p>
            </td>
        </tr>
    </table>

    <!-- Bottom spacer -->
    <div style="height: 40px;"></div>

</body>
</html>
