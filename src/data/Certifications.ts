export type CertificationsDataProps = {
  id: number
  name: string
  archive: string
  picture: string
}[]

export const CertificationsData: CertificationsDataProps = [
  {
    id: 1,
    name: "Azure Fundamentals - AZ-900",
    archive: "/archives/az.pdf",
    picture: "/archives/az.png"
  }
];