import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>What I know ^_^ </h1>
	<table>
		<tr>
			<th>Skills</th>
			<th>Experience</th>
		</tr>
		<tr>
			<td>Git</td><td>1+ years</td>
		</tr>
		<tr>
			<td>Bash</td><td>1+ years</td>
		</tr>
		<tr>
			<td>C</td><td>1+ years</td>
		</tr>
		<tr>
			<td>HTML></td><td>1+ years</td>
		</tr>
		<tr>
			<td>CSS</td><td>1+ years</td>
		</tr>
		<tr>
			<td>Ruby</td><td>1+ year</td>
		</tr>
		<tr>
			<td>Rails</td><td>1+ year</td>
		</tr>
		<tr>
			<td>C++</td><td>less than a year</td>
		</tr>
		<tr>
			<td>JavaScript</td><td>less than a year</td>
		</tr>
		<tr>
			<td>React Js</td><td>less than a year</td>
		</tr>
	</table>
    <Link to="/">Go back to my homepage</Link>
  </div>
)
export default SecondPage
