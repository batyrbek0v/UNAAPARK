import React from 'react'
import Card from '../../components/Card/Card'
import { API } from '../../configs/api'

const Cars = () => {

	const [base, setBase] = React.useState(null)

	React.useEffect(() => {
		API.get()
			.then(res => {
				const result = Object.values(res.data);
				
				setBase(result)
			})

	}, []);

	return (
		<>
			<Card base={base} />
		</>
	)
}

export default Cars