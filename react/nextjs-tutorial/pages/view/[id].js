import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const [item, setItem] = useState([]);

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res);
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
