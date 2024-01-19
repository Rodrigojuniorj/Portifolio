export function calculateAge(dateOfBirth: string): number {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}