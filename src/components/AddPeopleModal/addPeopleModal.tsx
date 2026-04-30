import { SyntheticEvent, useState } from 'react'
import { ReactComponent as CloseSvg } from '../../images/close-icon.svg'
import { EUserRoles } from '../../types'
import Alert from '../Alert/Alert'
import Button from '../Button/Button'
import Input from '../Input/Input'
import CustomSelect from '../Select'

const AddPeopleModal = ({
    show,
    onClose,
}: {
    show: boolean
    onClose: () => void
}) => {
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        role: EUserRoles['SUB-ADMIN'],
    }
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [formData, setFormData] = useState(initialFormState)

    const closeAlert = () => {
        setShowAlert(false)
    }
    const openAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    const _handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        openAlert()
        setFormData(initialFormState)
        onClose()
    }

    const _handleChange = ({
        currentTarget: { name, value },
    }: SyntheticEvent<HTMLInputElement>) => {
        setFormData((prevValue) => ({ ...prevValue, [name]: value }))
    }

    const _handleClose = () => {
        setFormData(initialFormState)
        onClose()
    }

    return (
        <>
            <Alert
                text={`${formData.firstName} ${formData.lastName} has been invited to join TruckersFinder`}
                heading="Success"
                variant="success"
                isOpen={showAlert}
                onClose={closeAlert}
            />
            <div
                className={`${
                    !show && 'hidden'
                } fixed top-0 flex z-10 justify-center py-16 sm:items-center sm:left-0 left-[230px] right-0  h-screen bg-grey_03`}
                onClick={_handleClose}
            >
                <div
                    className="bg-white rounded-16 h-max w-[40%] md:w-[50%] sm:w-[90%]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center border-b border-b-border-bordercolor p-4 ">
                        <h1 className="font-bold md:text-lg text-2xl">
                            Add People
                        </h1>
                        <CloseSvg
                            onClick={_handleClose}
                            className="cursor-pointer"
                        />
                    </div>
                    <form className="p-4 space-y-4" onSubmit={_handleSubmit}>
                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="firstName"
                            LabelText="First Name"
                            InputName="firstName"
                            InputType="text"
                            InputPlaceholder="George"
                            Value={formData.firstName}
                            onChange={_handleChange}
                            required
                        />

                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="lastName"
                            LabelText="Last Name"
                            InputName="lastName"
                            InputType="text"
                            InputPlaceholder="Benjamin"
                            Value={formData.lastName}
                            onChange={_handleChange}
                            required
                        />

                        <Input
                            InputClass=""
                            LableClass=""
                            LabelFor="email"
                            LabelText="Email"
                            InputName="email"
                            InputType="email"
                            InputPlaceholder="George.Benjamin@hotmail.com"
                            Value={formData.email}
                            onChange={_handleChange}
                            required
                        />
                        <CustomSelect
                            SelectHeaderClass=""
                            wrapperClass=""
                            label="Role"
                            placeholder="Select Role"
                            value={{
                                label: formData.role,
                                value: formData.role,
                            }}
                            onChange={({ value }) =>
                                setFormData((prevValue) => ({
                                    ...prevValue,
                                    role: value as EUserRoles,
                                }))
                            }
                            options={[
                                {
                                    value: EUserRoles.ADMIN,
                                    label: EUserRoles.ADMIN,
                                },
                                {
                                    value: EUserRoles['SUB-ADMIN'],
                                    label: EUserRoles['SUB-ADMIN'],
                                },
                            ]}
                        />
                        <div className="flex flex-row-reverse">
                            <Button
                                buttonClass=""
                                color="primary"
                                ButtonText="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddPeopleModal
