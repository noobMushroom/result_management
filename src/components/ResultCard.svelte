<script>
	let props = $props();
</script>

<div>
	<h1>{props.term}</h1>
	<form onsubmit={props.handleSubmit}>
		<table>
			<thead>
				<tr>
					<th>Subjects</th>
					{#each props.terms[props.term].examType as term}
						<th scope="col">{term}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each props.subjects as subject}
					<tr>
						<th scope="row">{subject.toUpperCase()}</th>
						{#each props.terms[props.term].examType as examType}
							<td
								><input
									value={props.marks.terms[props.term][subject][examType]}
									type="text"
									class=" bg-transparent"
									name={`${subject}-${examType}`}
								/></td
							>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<button>submit</button>
	</form>
</div>
