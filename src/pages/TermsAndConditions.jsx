import React from "react";
import { FaCheckCircle, FaExclamationTriangle, FaGavel, FaUserShield, FaLock, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";

const TermsAndConditions = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 my-10 bg-background text-text rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-primary flex items-center gap-2">
                <FaGavel /> Terms and Conditions
            </h1>
            <p className="mb-4">
                Welcome to <span className="text-primary font-semibold">PicVault</span>! These Terms and Conditions govern your use of our website and services. By accessing or using PicVault, you agree to comply with these terms. If you do not agree, please refrain from using our platform.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-primary flex items-center gap-2">
                <FaCheckCircle /> 1. Acceptance of Terms
            </h2>
            <p className="mb-4">
                By accessing and using PicVault, you agree to be bound by these Terms and Conditions and our Privacy Policy. We reserve the right to modify these terms at any time, and continued use of the platform constitutes acceptance of any changes.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-primary flex items-center gap-2">
                <FaUserShield /> 2. User Eligibility
            </h2>
            <p className="mb-4">To use PicVault, you must be at least 13 years old. By using our platform, you confirm that you meet this age requirement.</p>

            <h2 className="text-xl font-semibold mt-6 text-primary flex items-center gap-2">
                <FaLock /> 3. User Content and Ownership
            </h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You retain ownership of any mobile photography you upload to PicVault.</li>
                <li>By uploading content, you grant PicVault a non-exclusive, worldwide, royalty-free license to display, distribute, and promote your content within the platform.</li>
                <li>You must ensure that any photos you upload are your own and do not violate any third-party copyrights or privacy rights.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-primary flex items-center gap-2">
                <FaExclamationTriangle /> 4. Prohibited Content
            </h2>
            <p className="mb-4">You may not upload, share, or display content that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Contains explicit, offensive, or illegal material.</li>
                <li>Infringes upon any copyright, trademark, or other intellectual property rights.</li>
                <li>Promotes hate speech, violence, or discrimination.</li>
                <li>Violates privacy rights or contains personal data of others without consent.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-primary">5. User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the platform for any unlawful purpose.</li>
                <li>Misuse or exploit any vulnerabilities in the website.</li>
                <li>Attempt to disrupt the website’s operations.</li>
                <li>Engage in any activity that violates these Terms and Conditions.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-primary">6. Account Suspension and Termination</h2>
            <p className="mb-4">We reserve the right to suspend or terminate accounts that violate our Terms and Conditions, engage in fraudulent activity, or pose a risk to the community.</p>

            <h2 className="text-xl font-semibold mt-6 text-primary">7. Intellectual Property</h2>
            <p className="mb-4">All trademarks, logos, and content displayed on PicVault (except for user-uploaded content) are the property of PicVault and may not be copied or used without permission.</p>

            <h2 className="text-xl font-semibold mt-6 text-primary flex items-center gap-2">
                <FaExternalLinkAlt /> 8. Third-Party Links and Services
            </h2>
            <p className="mb-4">PicVault may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>

            <h2 className="text-xl font-semibold mt-6 text-primary">9. Liability Disclaimer</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>PicVault provides its services "as is" without any warranties.</li>
                <li>We do not guarantee uninterrupted or error-free service.</li>
                <li>We are not responsible for any loss, damage, or data breach resulting from your use of the platform.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-primary">10. Privacy and Data Protection</h2>
            <p className="mb-4">Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect, store, and process your data.</p>

            <h2 className="text-xl font-semibold mt-6 text-primary">11. Governing Law</h2>
            <p className="mb-4">These Terms and Conditions are governed by the laws of [Insert Jurisdiction]. Any disputes will be resolved in the courts of [Insert Jurisdiction].</p>

            <h2 className="text-xl font-semibold mt-6 text-primary flex items-center gap-2">
                <FaEnvelope /> 12. Contact Us
            </h2>
            <p className="mb-4">If you have any questions about these Terms and Conditions, please contact us at [Insert Contact Email].</p>
        </div>
    );
};

export default TermsAndConditions;
