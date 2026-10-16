import LawyerProfile from "../LawyerProfile";
import { people } from "../people";
const person = people[2];
export const metadata = { title: `${person.name} | Oakmount Legal Practitioners`, description: person.focus };
export default function Page() { return <LawyerProfile person={person} />; }
