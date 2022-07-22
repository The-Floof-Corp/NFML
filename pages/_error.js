import DefaultHeaders from '../comp/DefaultHeaders.js'
import Link from 'next/link'

function CustomError({ statusCode }) {
	let statusText;
	// 'statusIcon' IS A LOCAL URL PATH
	let statusIcon;
	switch(statusCode){
		case 400:
			statusText = "Bad request."
			break;
		case 401:
			statusText = "Unauthorized."
			break;
		case 403:
			statusText = "Forbidden."
			break;
		case 404:
			statusText = "File or resource not found.";
			statusIcon = "/static/";
			break;
		case 405:
			statusText = "Method not allowed."
			break;
		case 429:
			statusText = "Too many requests."
			break;
		case 500:
			statusText = "Internal server error."
			break;
		case 502:
			statusText = "Bad gateway."
			break;
	}
	return (
		<>
			<DefaultHeaders />
			<div className=''>
				<div className="chpe gap-4 flex items-center justify-center flex-col bg-black h-screen w-screen text-3xl text-white">
					<h1 className="">ERROR {statusCode} - {statusText}</h1>
					<div className="items-left justify-left">
						<h1 className="">
							Want to <span className="text-blue-700"><Link href="/">go home</Link></span>?
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}

function getInitialProps({ res, err }) {
	let statusCode;
	// If the res variable is defined it means nextjs
	// is in server side
	if (res) {
		statusCode = res.statusCode;
	} else if (err) {
		// if there is any error in the app it should
		// return the status code from here
		statusCode = err.statusCode;
	} else {
		// Something really bad/weird happen and status code
		// cannot be determined.
		statusCode = null;
	}
	return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;