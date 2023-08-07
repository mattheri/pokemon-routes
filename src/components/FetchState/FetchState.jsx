import Spinner from 'react-bootstrap/Spinner'

const FetchState = ({ isLoading = true, isError = false, error = new Error(), children }) => {
	if (isLoading) {
		return <div className='d-flex align-items-center justify-content-center h-100'>
			<Spinner animation='border' role='status' />
		</div>
	}

	if (isError) {
		return <div className='d-flex align-items-center justify-content-center h-100'>
			<p>{error.message}</p>
		</div>
	}

	return children
}

export default FetchState;