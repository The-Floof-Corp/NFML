import DefaultHeaders from '../comp/DefaultHeaders.js'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'



function CustomError({ statusCode }) {
	const { t } = useTranslation("common");

	return (
		<>
			<DefaultHeaders />
			<div className='chpe gap-4 flex items-center justify-center flex-col bg-black h-screen w-screen text-3xl text-white pt-8 pb-8 pl-8 pr-8 object-contain md:object-scale-down'>
				<div className="pt-4">
					<h1 className="">{t("errorText")} {statusCode} - {t("error" + statusCode + "text")}</h1>
					<h1 className="">
						{t("do you want to")} <span className="text-blue-700"><Link href="/">{t("go home")}</Link></span>?
					</h1>
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