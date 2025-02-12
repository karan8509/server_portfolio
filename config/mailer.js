const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: "kj382542@gmail.com",
        pass: "ysbb qosn edmj uguu",
    }
});

const sendEmail = async ({ name, email, textarea, }) => {
    try {
        await transport.sendMail({
            from: "Karan Kashyap <kj382542@gmail.com>",
            to: email,
            subject: "Thank You!",
            text: `Hello ${name},\n\nThank you for reaching out!\n\nYour Message: ${textarea}`, // 
            html: `
                <h1>Hello ${name},</h1>
                <p>Thank you for reaching out!</p>
                <p><strong>Your Message:</strong> ${textarea}</p>
                <p>Best Regards,</p>
                <p>Karan Kashyap</p>
            `
        });

        console.log(`Email sent successfully to ${email}`);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};

module.exports = sendEmail;




const transportSubscribe = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: "kj382542@gmail.com",
        pass: "ysbb qosn edmj uguu",
    }
});

export const sendEmailSubscribe
    = async ({ subscribe }) => {
        try {
            await transportSubscribe.sendMail({
                from: "Karan Kashyap <kj382542@gmail.com>",
                to: subscribe,
                subject: "Thank You!",
                html: `
                        <p>Karan Kashyap</p>
            `
            });

            console.log(`Email sent successfully to ${email}`);
        } catch (error) {
            console.error("Error sending email: ", error);
        }
    };




