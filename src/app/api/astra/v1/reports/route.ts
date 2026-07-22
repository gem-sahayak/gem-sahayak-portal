import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file');

    const reportsDir = path.join(process.cwd(), 'astra-engine', 'reports', 'latest');

    if (!fs.existsSync(reportsDir)) {
      return NextResponse.json({ status: 'ERROR', message: 'Reports directory not found' }, { status: 404 });
    }

    if (file) {
      const filePath = path.join(reportsDir, file);
      // Security check: ensure path stays inside reportsDir
      if (!filePath.startsWith(reportsDir)) {
        return NextResponse.json({ status: 'ERROR', message: 'Access denied' }, { status: 403 });
      }
      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ status: 'ERROR', message: `Report ${file} not found` }, { status: 404 });
      }
      const content = fs.readFileSync(filePath, 'utf8');
      return NextResponse.json({ status: 'SUCCESS', fileName: file, data: JSON.parse(content) });
    }

    const files = fs.readdirSync(reportsDir).filter(f => f.endsWith('.json') || f.endsWith('.md'));
    return NextResponse.json({ status: 'SUCCESS', total: files.length, reports: files });
  } catch (error: any) {
    return NextResponse.json({ status: 'ERROR', message: error.message }, { status: 500 });
  }
}
