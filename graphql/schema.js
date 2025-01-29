export const schema =`#graphql
type Post {
  id: ID
  slug: String
  url: String
  title: String
  content: String
  image: String
  thumbnail: String
  status: String
  category: String
  publishedAt: String
  updatedAt: String
  userId: ID
}
type User {
  id: ID
  firstname: String
  lastname: String
  email: String
  birthDate: String
  login: Login
  address: Address
  phone: String
  website: String
  company: Company
}

type Login {
  uuid: ID
  username: String
  password: String
  md5: String
  sha1: String
  registered: String
}

type Address {
  street: String
  suite: String
  city: String
  zipcode: String
  geo: Geo
}

type Geo {
  lat: String
  lng: String
}

type Company {
  name: String
  catchPhrase: String
  bs: String
}

type SampleUser{
    name:String
    age:Int
    gender:String
}

type Query{
hello:String,
hello2:String,
data:String,
work:String,
users:[User],
posts:[Post],
post(id:ID):Post,
sampleUser:SampleUser,
sampleUsers:[SampleUser],
}


type Mutation {
    newUser(name:String,age:Int,gender:String):String
}
`