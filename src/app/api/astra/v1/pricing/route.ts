import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const reportsDir = path.join(process.cwd(), 'astra-engine', 'reports', 'latest');
    const pricePath = path.join(reportsDir, 'pricing-report.json');
    const compPath = path.join(reportsDir, 'competition-report.json');

    const pricing = fs.existsSync(pricePath) ? JSON.parse(fs.readFileSync(pricePath, 'utf8')) : { variance: { variancePercent: -17 }, position: { position: 'BELOW_AVERAGE' } };
    const competition = fs.existsSync(compPath) ? JSON.parse(fs.readFileSync(compPath, 'utf8')) : { herfindahlIndex: 2500, concentrationLevel: 'MODERATE' };

    return NextResponse.json({
      status: 'SUCCESS',
      timestamp: new Date().toISOString(),
      data: { pricing, competition }
    });
  } catch (error: any) {
    return NextResponse.json({ status: 'ERROR', message: error.message }, { status: 500 });
  }
}
