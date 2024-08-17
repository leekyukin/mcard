import Alert from '@/components/shared/Alert'
import Button from '@/components/shared/Button'
import AdBannerListAddButton from '@/components/Test/AdBannerListAddButton'
import CardListAddButton from '@/components/Test/CardListAddButton'
import { AlertContextProvider, useAlertContext } from '@/contexts/AlertContext'
import { title } from 'process'
import { useRevalidator } from 'react-router-dom'

function TestPage() {
  const context = useAlertContext()

  return (
    <div>
      <AdBannerListAddButton />
      <CardListAddButton />
      <Button
        onClick={() =>
          context.open({
            title: '안녕',
            description: 'This is just for a test',
            onButtonClick: () => {},
          })
        }
      >
        버튼 클릭 테스트
      </Button>
    </div>
  )
}

export default TestPage
