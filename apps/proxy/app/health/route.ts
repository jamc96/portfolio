import { NextResponse } from 'next/server';

const API_URL = process.env.API_URL!;

export async function GET() {
  try {

    const response = await fetch(`${API_URL}/api/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/text',
      },
    });

    if (!response.ok) {
      /*PEDING: email alerting*/
      console.error('API_HEALTH_ERROR: ', {
        status: response.status,
        statusText: response.statusText,
      });

      return NextResponse.json({ success: false });
    }
    const textData = await response.text();

    let data;
    if (textData.trim() === 'healthy' || textData.includes('-')) {
      data = {
        status: 'healthy',
        date: textData.includes('-') ? textData : new Date().toISOString().split('T')[0],
      };
    } else {
      throw new Error('Unexpected response');
    }

    console.log('API_HEALTH: ', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API_HEALTH_ERROR: ', error);

    return NextResponse.json({ success: false });
  }
}