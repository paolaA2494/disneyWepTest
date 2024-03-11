import React from "react";
import castle from "../../assets/images/castle.png";
import "../../styles/about_us.scss";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__main">
        <h1>Sobre Nosotros</h1>
        <p className="my-5 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum
          velit ac lacus dapibus, at hendrerit nunc pellentesque. Proin
          condimentum maximus nunc, consectetur congue lectus congue at.
          Suspendisse luctus, massa vitae commodo sollicitudin, nisi felis
          elementum mauris, ac tincidunt nisl urna id leo. Praesent cursus
          fermentum odio, at mattis lectus hendrerit sit amet. Maecenas
          imperdiet ultrices eros a porttitor. Pellentesque quis felis vel purus
          iaculis lacinia sed ut sapien. Quisque imperdiet nibh sit amet
          malesuada maximus. Nunc aliquam facilisis leo, a ullamcorper magna.
          Maecenas euismod sed orci ut interdum. Nullam quis lacus vestibulum,
          ornare lorem in, pretium risus. In hac habitasse platea dictumst. In
          iaculis molestie urna, non semper felis. Ut in ligula nec leo rutrum
          suscipit non id mauris. Praesent rhoncus nibh tellus, eget iaculis
          sapien finibus eget. Suspendisse odio dolor, condimentum sed dui nec,
          tincidunt laoreet ex.
        </p>

        <p className="my-5 text-justify">
          Aliquam dapibus rhoncus justo, in mollis nisi vehicula non. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla odio,
          viverra a porttitor vulputate, egestas vitae enim. Cras faucibus elit
          id lacinia ultrices. Fusce aliquam lacus pretium eleifend feugiat.
          Mauris quis turpis in lacus elementum sodales. Ut ipsum tellus, dictum
          id vestibulum vel, lobortis vel risus. Cras faucibus arcu eu ipsum
          congue, ut hendrerit magna blandit. Praesent interdum, ligula et
          malesuada maximus, lectus quam pretium odio, et ullamcorper augue
          metus ac lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla gravida, massa at tincidunt dictum, augue nisi dictum
          libero, et tempor tortor elit in velit. Suspendisse gravida justo vel
          ipsum congue ultricies. Sed luctus nec augue vel aliquam. Suspendisse
          condimentum ornare massa quis sagittis. Pellentesque porttitor, lacus
          in eleifend porta, lectus massa euismod leo, id euismod ipsum nisi sit
          amet quam. Aliquam fermentum, libero ac pulvinar pellentesque, sapien
          augue ultricies nisi, non consequat ante elit sit amet mi.
        </p>
      </div>

      <div className="about-us__footer">
        <img src={castle} alt="castle" />
      </div>

      <p className="mt-5 mb-3 text-center"> Disney App © 2024</p>
    </div>
  );
}

export default AboutUs;
