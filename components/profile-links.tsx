const profiles = [
  { label: 'GitHub', href: 'https://github.com/HJyup' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danyil-butov/' },
];

export function ProfileLinks() {
  return profiles.map(({ label, href }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="profile-link"
    >
      <span>{label}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="profile-link-icon"
      >
        <path
          d="M4 12 12 4M4 4h8v8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  ));
}
