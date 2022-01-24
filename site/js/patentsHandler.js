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

  returnedObject.averageAgeWomen = patients
    .filter((patientSheet) => patientSheet.patient.sexo === "W")
    .reduce((acc, patientSheet, currentIndex, array) => {
      if (currentIndex !== array.length - 1) {
        return acc + patientSheet.patient.age;
      }
      return (acc + patientSheet.patient.age) / array.length;
    }, 0);

  return returnedObject;
};

export default patientsHandler;
