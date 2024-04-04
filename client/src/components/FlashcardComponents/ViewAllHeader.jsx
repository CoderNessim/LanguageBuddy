import ModalHeader from "../ModalWindow/ModalHeader"
import { CloseButton } from "@mantine/core"
import { useNavigate } from "react-router-dom"
function ViewAllHeader() {
  const navigate = useNavigate()
  return (
    <div className="all-flashcards-header">
        <ModalHeader title="All Flashcards" />
        <CloseButton
          onClick={() => navigate(-1)}
          style={{ alignSelf: 'center' }}
          size="xl"
        />
      </div>
  )
}

export default ViewAllHeader
