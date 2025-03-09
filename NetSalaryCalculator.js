function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    const payeBands = [
        { upperLimit: 24000, rate: 0.10 },
        { upperLimit: 32333, rate: 0.25 },
        { upperLimit: 500000, rate: 0.30 },
        { upperLimit: 800000, rate: 0.325 },
        { upperLimit: Infinity, rate: 0.35 }
    ];

    let taxableIncome = grossSalary;
    let paye = 0;
    for (let band of payeBands) {
        if (taxableIncome <= 0) break;
        let incomeInBand = Math.min(taxableIncome, band.upperLimit);
        paye += incomeInBand * band.rate;
        taxableIncome -= incomeInBand;
    }

    const shif = grossSalary * 0.0275;

    const tierI = Math.min(grossSalary, 8000) * 0.06;
    const tierII = Math.max(0, Math.min(grossSalary - 8000, 64000)) * 0.06;
    const nssf = tierI + tierII;

    const housingLevy = grossSalary * 0.015;

    const totalDeductions = paye + shif + nssf + housingLevy;

    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary.toFixed(2),
        paye: paye.toFixed(2),
        shif: shif.toFixed(2),
        nssf: nssf.toFixed(2),
        housingLevy: housingLevy.toFixed(2),
        totalDeductions: totalDeductions.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

