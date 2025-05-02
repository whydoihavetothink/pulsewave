import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { useTranslations } from 'next-intl';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || 'Pulsewave';

export function useT(namespace?: string) {
  const t = useTranslations(namespace);
  return (key: string, values: Record<string, unknown> = {}) =>
    t(key, { brand: BRAND_NAME, ...values });
}
