const patientsHandler = (patients) => {
  const returnedObject = {
    nAdults: 0,
    nDiabeticMen: 0,
    totalDaysInHospital: 0,
    averageAgeWomen: 0,
  };

  returnedObject.nAdults = patients.filter(
    (patientSheet) => patientSheet.patient.age > 18
  ).length;

  returnedObject.nDiabeticMen = patients.filter(
    (patientSheet) =>
      patientSheet.patient.sexo === "M" && patientSheet.diet === "Diabetes"
  ).length;

  returnedObject.totalDaysInHospital = patients.reduce(
    (acc, patientSheet) => acc + patientSheet.daysInHospital,
    0
  );

  const women = patients.filter(
    (patientSheet) => patientSheet.patient.sexo === "W"
  );

  returnedObject.averageAgeWomen = parseInt(
    (
      women.reduce((acc, patientSheet) => acc + patientSheet.patient.age, 0) /
      women.length
    ).toFixed(0),
    10
  );

  return returnedObject;
};

export default patientsHandler;
