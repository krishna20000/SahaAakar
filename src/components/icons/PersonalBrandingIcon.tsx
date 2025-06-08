import type { SVGProps } from 'react';

export function PersonalBrandingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12c-3.866 0-7 1.79-7 4v2h14v-2c0-2.21-3.134-4-7-4zm7.5-5.5l1.5 3 3-1.5-1.5-3 1.5-3-3 1.5-1.5 3z" />
    </svg>
  );
}
