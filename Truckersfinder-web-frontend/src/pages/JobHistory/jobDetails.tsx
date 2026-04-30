import { Link } from 'react-router-dom'
import PageHeading from '../../components/PageHeading/PageHeading'
import stopImage from '../../images/stop-image.png'

const JobHistoryDetailsPage = () => {
    return (
        <main className="py-6">
            <div className="px-6 sm:px-4">
                <PageHeading HeadingText="Job Details" />
                <Link to={'/job-history'}>
                    <p className="text-primarycolor font-medium text-base">
                        Back
                    </p>
                </Link>
            </div>

            <div className="px-6 sm:px-0">
                <div className="bg-white p-6 pb-8 mt-8 rounded-16">
                    <section className="pb-8 mb-8 space-y-8 border-b border-border-bordercolor">
                        <p className="text-xl font-semibold text-black">
                            General information
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Date
                                </p>
                                <p>2023-05-04</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Load Number
                                </p>
                                <p>1088756</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Load Weight
                                </p>
                                <p>44588</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Total Miles
                                </p>
                                <p>234</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Charge Amount
                                </p>
                                <p>$41.75</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Rate
                                </p>
                                <p>$835.00</p>
                            </div>
                        </div>
                    </section>
                    <section className="pb-8 mb-8 space-y-8 border-b border-border-bordercolor break-all">
                        <p className="text-xl font-semibold text-black">
                            Carrier Details
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Carrier
                                </p>
                                <p>1232599</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Equipment Type
                                </p>
                                <p>Equipment Type</p>
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Shipper Name
                                </p>
                                <p>roar logistics</p>
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Shipper Address
                                </p>
                                <p>535 Exchange Street, Buffalo, NY, USA</p>
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Shipper Phone
                                </p>
                                <p>8882927627 </p>
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Shipper Email
                                </p>
                                <p>accounting@roarlogistics.com</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Driver Name
                                </p>
                                <p>Dele Bison</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Driver Email
                                </p>
                                <p>driver@email.com </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Driver Phone
                                </p>
                                <p>2159176830</p>
                            </div>
                        </div>
                    </section>
                    <section className="pb-8 mb-8 space-y-8 border-b border-border-bordercolor">
                        <p className="text-xl font-semibold text-black">
                            Stop Details
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Stop Type
                                </p>
                                <p>Pick Up</p>
                            </div>
                            <div className="space-y-1 col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Stop Address
                                </p>
                                <p>9890 Bonnie View Road, Dallas, TX, USA </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Stop Date
                                </p>
                                <p>05-04-2023</p>
                            </div>
                            <div className="space-y-1 col-span-2 sm:col-span-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Stop Time
                                </p>
                                <p>22:20</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-grey_01 font-medium text-sm">
                                    Status
                                </p>
                                <p>COMPLETED</p>
                            </div>
                        </div>
                    </section>
                    <section className="space-y-8">
                        <p className="text-xl font-semibold text-black">
                            Drop off Details
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Drop off date
                                </p>
                                <p>05-04-2023</p>
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Drop off address
                                </p>
                                <p>9890 Bonnie View Road, Dallas, TX, USA </p>
                            </div>
                            <img
                                src={stopImage}
                                alt="stop-image"
                                className=" sm:hidden row-span-3 "
                            />

                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Drop off time
                                </p>
                                <p>22:20</p>
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                                <p className="text-grey_01 font-medium text-sm">
                                    Drop off Status
                                </p>
                                <p>COMPLETED</p>
                            </div>
                            <img
                                src={stopImage}
                                alt="stop-image"
                                className=" sm:block hidden"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default JobHistoryDetailsPage
