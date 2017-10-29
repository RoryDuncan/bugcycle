import React from "react"
import Link from "next/link"
import Layout from '../components/layout/Layout'
import {AuthRegion, auth} from '../components/Auth'

export default () => (

  <AuthRegion>
    <Layout auth={auth.state} title="Team">
      <div>
        <h1>Project: Bug Cycle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi earum perspiciatis asperiores soluta ullam deleniti voluptate alias incidunt modi! Est quam iure, at impedit deserunt sint aspernatur tempore magnam</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi earum perspiciatis asperiores soluta ullam deleniti voluptate alias incidunt modi! Est quam iure, at impedit deserunt sint aspernatur tempore magnam</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi earum perspiciatis asperiores soluta ullam deleniti voluptate alias incidunt modi! Est quam iure, at impedit deserunt sint aspernatur tempore magnam</p>
      </div>
    </Layout>
  </AuthRegion>
)