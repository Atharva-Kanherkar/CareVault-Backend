import { gql } from 'graphql-tag';



export const queries = gql`
   type Query {
 
  getHospital(id: ID!): Hospital

 
  getAllHospitals: [Hospital]

 
  getStaffMember(id: ID!): StaffMember
 
  getAllStaffMembers: [StaffMember]
 
  getAdministrator(id: ID!): Administrator

   getAllAdministrators: [Administrator]



  
}




`

 
   