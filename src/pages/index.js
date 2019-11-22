import React from "react"
import Workspace from "../components/Workspace"
import Clients from "../components/Clients"
import Works from "../components/Works"
import Layout from "../components/Layout"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Workspace />
    <Works />
    <Clients />
    <Contact />
  </Layout>
)

export default IndexPage
