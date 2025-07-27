import React from "react";

export default function page({ params }) {
  // params is an object that contains the dynamic segments of the URL
  // For example, if the URL is /products/meat/123, params will be
  // { id: '123' } if the dynamic segment is [id]
  //this id is folder name in the file system
  // and it is used to access the meat item with that id
  //we new name without id we want t acces parms.newname
  return <div>meat Item {params.id} </div>;
}
