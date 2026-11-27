const CONTACTS = [
  { label: "Editorial and general enquiries", email: "editorial@os-intel.com" },
  { label: "Corrections", email: "corrections@os-intel.com" },
  { label: "News tips", email: "tips@os-intel.com" },
];

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600 font-serif">Choose the appropriate email address to open your email application. No message is sent by this website.</p>
      {CONTACTS.map(({ label, email }) => (
        <div key={email} className="border border-gray-200 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">{label}</p>
          <a className="text-red-600 font-semibold break-all hover:underline" href={`mailto:${email}`}>{email}</a>
        </div>
      ))}
      <p className="text-xs text-gray-500">For sensitive information, first request an appropriate secure contact method without including confidential material in your email.</p>
    </div>
  );
}
