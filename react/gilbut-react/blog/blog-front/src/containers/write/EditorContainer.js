import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Editor from '../../components/write/Editor';
import { changeField, initialize } from '../../modules/write';
import { withRouter, Redirect, Route } from 'react-router-dom';

const EditorContainer = ({history}) => {
  const dispatch = useDispatch();
  const { title, body, user } = useSelector(({ write, user }) => ({
    title: write.title,
    body: write.body,
    user: user.user,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <Route 
      render={props => 
        user ? (
        <Editor onChangeField={onChangeField} title={title} body={body} />
        ) : (
          <Redirect to={{pathname: '/login'}} />
        )
      }
    />
  )
};

export default withRouter(EditorContainer);
