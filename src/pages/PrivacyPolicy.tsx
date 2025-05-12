import type { ReactNode } from "react";
import images from "../utils/images";

const PrivacyPolicy = () => {
  return (
    <div className="w-full space-y-7 tracking-wider">
      <img
        src={images.pp1}
        alt="privacy policy"
        className="w-full h-64 object-cover rounded-md shadom "
      />

      <h1 className="text-center text-5xl font-black tracking-wide text-gray-100">
        Privacy Policy
      </h1>

      <div className="mx-auto max-w-2xl space-y-5">
        <PolicySection>
          <PolicyContent className="font-bold">
            Effective Date: 2025
          </PolicyContent>
          <PolicyContent>
            Your privacy is important to us. This Privacy Policy outlines how
            ThoughtsHub collects, uses, and protects your information when you
            use our mobile application.
          </PolicyContent>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>1. Information We Collect</PolicyHeading>
          <div>
            <PolicyHeading2>Personal Information</PolicyHeading2>
            <PolicyContentListItem>
              Name, email address, and educational information when you register
            </PolicyContentListItem>
            <PolicyContentListItem>
              Profile data you provide (e.g., interests, skills)
            </PolicyContentListItem>

            <PolicyHeading2>Content</PolicyHeading2>
            <PolicyContentListItem>
              Images, text, and other content you upload to the app
            </PolicyContentListItem>

            <PolicyHeading2>Technical Data</PolicyHeading2>
            <PolicyContentListItem>
              Device type, operating system, IP address
            </PolicyContentListItem>
            <PolicyContentListItem>
              Usage patterns within the app (e.g., features accessed, time
              spent)
            </PolicyContentListItem>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>2. How We Use Your Information</PolicyHeading>
          <div>
            <PolicyContentListItem>
              To personalize your experience and deliver relevant content
            </PolicyContentListItem>
            <PolicyContentListItem>
              To improve app functionality and user engagement
            </PolicyContentListItem>
            <PolicyContentListItem>
              To communicate updates and information relevant to your interests
            </PolicyContentListItem>
            <PolicyContentListItem>
              To enforce our Terms and ensure platform integrity
            </PolicyContentListItem>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>3. Account and Data Deletion</PolicyHeading>
          <div>
            <PolicyContent>
              You may delete your account at any time via app settings
            </PolicyContent>
            <PolicyContent>
              Upon deletion, all personal data and uploaded content are
              permanently removed from our servers
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>4. Sharing of Information</PolicyHeading>
          <div>
            <PolicyContent>
              We do not sell or rent your personal data. We may share data with
              trusted third-party services for hosting, analytics, or technical
              support. Legal requests may require us to share limited data in
              compliance with applicable laws.
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>5. Security</PolicyHeading>
          <div>
            <PolicyContent>
              We use encryption and modern security practices to protect your
              data. Access to user data is restricted to authorized personnel
              only.
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>6. Children's Privacy</PolicyHeading>
          <div>
            <PolicyContent>
              Our app is intended for users aged 13 and above We do not
              knowingly collect data from children under 13.
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>7. Your Rights</PolicyHeading>
          <div>
            <PolicyContentListItem>
              Access and edit your profile at any time
            </PolicyContentListItem>
            <PolicyContentListItem>
              Request deletion of your account and data
            </PolicyContentListItem>
            <PolicyContent>
              Contact us at biz.kartikey@gmail.com for any privacy concerns
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>8. Intellectual Property</PolicyHeading>
          <div>
            <PolicyContent>
              Our content, logos, design elements, and trademarks are the
              exclusive property of ThoughtsHub. Unauthorized use or
              reproduction is prohibited
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>9. Changes to This Policy</PolicyHeading>
          <div>
            <PolicyContent>
              We may update this Privacy Policy periodically. Significant
              changes will be communicated via the app or email. Continued use
              of the app implies acceptance of the revised policy.
            </PolicyContent>
          </div>
        </PolicySection>

        <PolicySection>
          <PolicyHeading>10. Contact</PolicyHeading>
          <div>
            <PolicyContent>
              For any questions regarding this Privacy Policy, please contact:
              Email:{" "}
              <a href="mailto:biz.kartikey@gmail.com" className="text-white">
                biz.kartikey@gmail.com
              </a>
            </PolicyContent>
          </div>
        </PolicySection>
      </div>
    </div>
  );
};

const PolicySection = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const PolicyHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-2xl font-black my-3 text-gray-100">{children}</h2>;
};

const PolicyHeading2 = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-black my-2 text-gray-200">{children}</h3>;
};

const PolicyContent = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <p className={"text-gray-300 " + className}>{children}</p>;
};

const PolicyContentListItem = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-300 w-1.5 h-1.5 rounded-full ml-1"></div>
      <p className={"text-gray-300 " + className}>{children}</p>
    </div>
  );
};

export default PrivacyPolicy;
