import { COLLECTIONS } from '@/constants'
import { adBanners } from '@/mock/data'
import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import Button from '../shared/Button'

function AdBannerListAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((adBanner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER))

      batch.set(docRef, adBanner)
    })

    await batch.commit()

    alert('배너 리스트 추가 완료')
  }

  return <Button onClick={handleButtonClick}> 배너 리스트 추가하기</Button>
}

export default AdBannerListAddButton
