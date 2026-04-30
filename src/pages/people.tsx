import { useEffect, useState } from 'react'
import DataTable from '../components/DataTable'
import PageHeading from '../components/PageHeading/PageHeading'
import { peopleTableColumns } from '../constants/tableColumns'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import { ReactComponent as SearchIcon } from '../images/search-icon.svg'
import { useAppDispatch, useAppSelector } from '../hooks/redux.hooks'
import { TUser } from '../types/app.types'
import { getUsers } from '../store/slices/profile.slice'
import AddPeopleModal from '../components/AddPeopleModal/addPeopleModal'

const PeoplePage = () => {
    const { users } = useAppSelector((state) => state.profile)
    const [showAddPeopleModal, setShowAddPeopleModal] = useState<boolean>(false)
    const [data, setDate] = useState<
        (TUser & { actions: { label: string; className: string }[] })[]
    >([])
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSearchInput(value)
    }

    useEffect(() => {
        users &&
            setDate(
                users?.slice(0, 10)?.map((user) => ({
                    ...user,
                    actions: [
                        {
                            label: 'Delete',
                            className: '!text-red-500 !no-underline',
                        },
                    ],
                }))
            )
    }, [users])

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <main className="p-6">
            <AddPeopleModal
                show={showAddPeopleModal}
                onClose={() => setShowAddPeopleModal(false)}
            />
            <div className="flex items-center justify-between mb-6">
                <PageHeading HeadingWrapperClass="" HeadingText="People" />
                <Button
                    buttonClass=""
                    color="primary"
                    ButtonText="Add people"
                    onClick={() => setShowAddPeopleModal(true)}
                />
            </div>

            <div className="mb-6">
                <Input
                    InputClass="theme_input w-[30%] text-[16px] leading-[18px] text-textcolor1 bg-bgShade1 py-[13px] border-[1px] border-transparent rounded-8"
                    InputName="search"
                    InputPlaceholder="Search here"
                    Value={searchInput}
                    InputType="text"
                    PreContent={<SearchIcon />}
                    onChange={handleChange}
                />
            </div>

            <DataTable columns={peopleTableColumns} data={data} />
        </main>
    )
}

export default PeoplePage
