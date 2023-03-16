import React, { Suspense, FC } from 'react'
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import routers from "./routers";
import { Tabs } from "antd";

const App = () => {
  const history = useHistory();

  const onChange = React.useCallback((activeKey: string) => {
    history.push(activeKey);
  }, [history])

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <Tabs.TabPane tab="Home" key="/" />
        <Tabs.TabPane tab="About" key="/about" />
        <Tabs.TabPane tab="Users" key="/users" />
      </Tabs>
      <Switch>
        <Suspense fallback={<div>loading</div>}>
          {routers.map(router => (
            <Route
              key={router.path}
              path={router.path}
              component={router.component}
              exact
            />
          ))}
        </Suspense>
      </Switch>
    </>
  )
}

export default App
