import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const reportsDir = path.join(process.cwd(), 'astra-engine', 'reports', 'latest');
    const mktPath = path.join(reportsDir, 'market-report.json');
    const compPath = path.join(reportsDir, 'competition-report.json');

    const market = fs.existsSync(mktPath) ? JSON.parse(fs.readFileSync(mktPath, 'utf8')) : { trend: 'RISING', averageGrowthRate: 60 };
    const competition = fs.existsSync(compPath) ? JSON.parse(fs.readFileSync(compPath, 'utf8')) : { herfindahlIndex: 2500, concentrationLevel: 'MODERATE' };

    return NextResponse.json({
      status: 'SUCCESS',
      timestamp: new Date().toISOString(),
      data: { market, competition }
    });
  } catch (error: any) {
    return NextResponse.json({ status: 'ERROR', message: error.message }, { status: 500 });
  }
}
