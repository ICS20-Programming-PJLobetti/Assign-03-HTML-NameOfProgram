// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function calculates the values of the Icosahedron.
 */
function buttonClicked () {
  // get the "a" value
  let edge = parseFloat(document.getElementById('edge').value)

  // calculates the surface area of a Icosahedron
  let surfaceArea = 5 * Math.sqrt(3) * edge**2
  
  // calculates the volume of a Icosahedron 
  let volume = (5(3 + Math.sqrt(5)) / 12) * edge**3

  // calculates the insphere radius of a Icosahedron
  let radius = edge / 12 * Math.sqrt(3) * (3 + Math.sqrt(5))
  
  // display the different calculations
  document.getElementById('surfaceArea').innerHTML = "The Surface Area of the Icosahedron would be" + surfaceArea.toFixed(2) + "cm²"

  document.getElementById('volume').innerHTML = "The Volume of the Icosahedron would be" + volume.toFixed(2) + "cm³"

  document.getElementById('radius').innerHTML = "The Insphere Radius of the Icosahedron would be" + radius.toFixed(2) + "cm"
}