import React from 'react';

const AppCard = ({app}) => {
          return (
                   <div>
          <img src={app.picture} alt="" />
          <h2>{app.name}</h2>
          <p>62d ago</p>
      <p>{
app.tags.map((tag,ind) => (
          <div key={ind}>
                    {tag}
          </div>
))
          }</p>

<p>{app.status}</p>


</div>
          );
};

export default AppCard;