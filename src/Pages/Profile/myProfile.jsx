
import useContextInfo from "../../Hooks/useContextInfo";
import { Card } from "../../components/ui/card";

export default function MyProfile() {

    const {user} = useContextInfo()

  return (
    <Card className="flex items-start gap-6 p-6 rounded-xl w-1/2 mt-10">
      <div className="flex-shrink-0">
        <img
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          width={120}
          height={120}
          alt="User Profile"
          className="rounded-full"
        />
      </div>
      <div className="flex-1 grid gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">{user.name}</h3>
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
            User
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <PhoneIcon className="w-5 h-5" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPinIcon className="w-5 h-5" />
          <span>123 Main St, Anytown USA</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MailIcon className="w-5 h-5" />
          <span>{user.email}</span>
        </div>
      </div>
    </Card>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
