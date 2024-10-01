// src/middleware.ts

import { NextResponse } from 'next/server';

export function middleware(req:any) {
  const url = req.nextUrl.clone();
  const cMenu = url.searchParams.get('cMenu');

  if (!cMenu) {
    url.searchParams.set('cMenu', '1');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
