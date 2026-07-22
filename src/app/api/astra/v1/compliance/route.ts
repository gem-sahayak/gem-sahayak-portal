import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const reportsDir = path.join(process.cwd(), 'astra-engine', 'reports', 'latest');
    const compPath = path.join(reportsDir, 'compliance-report.json');

    const compliance = fs.existsSync(compPath) ? JSON.parse(fs.readFileSync(compPath, 'utf8')) : { eligible: true, exemptionStatus: 'MSME_EMD_EXEMPTED', risk: { classification: 'LOW_RISK' } };

    return NextResponse.json({
      status: 'SUCCESS',
      timestamp: new Date().toISOString(),
      data: { compliance }
    });
  } catch (error: any) {
    return NextResponse.json({ status: 'ERROR', message: error.message }, { status: 500 });
  }
}
