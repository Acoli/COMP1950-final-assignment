<form action="php/form_processing.php" method="post">
	<table>
		<tr>
			<td><label for="email">Email:</label></td>
			<td><input type="email" name="email" /></td>
		</tr>
		<tr>
			<td><label for="subject">Subject:</label></td>
			<td><input type="text" name="subject" /></td>
		</tr>
		<tr>
			<td><label for="message">Message:</label></td>
			<td><textarea name="message"></textarea></td>
		</tr>
		<tr>
			<td colspan="2"><button>Send!</button></td>
		</tr>
	</table>
</form>