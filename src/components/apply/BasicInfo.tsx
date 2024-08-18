import { 결제일옵션, 신용점수옵션, 연소득옵션 } from '@/constants/apply'
import { ApplyValues } from '@/models/apply'
import { ChangeEvent, useCallback, useState } from 'react'
import FixedBottomButton from '../shared/FixedBottomButton'
import Select from '../shared/Select'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

function BasicInfo({ onNext }: { onNext: (values: InfoValues) => void }) {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setInfoValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const 모든정보가선택되었는가 = Object.values(infoValues).every(
    (value) => value,
  )

  return (
    <div>
      <Select
        label="연소득"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value={infoValues.salary}
        name="salary"
        onChange={handleInfoChange}
      />
      <Select
        label="신용점수"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        name="creditScore"
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        label="결제일"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        name="payDate"
        value={infoValues.payDate}
        onChange={handleInfoChange}
      />

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues)
        }}
        disabled={!모든정보가선택되었는가}
      />
    </div>
  )
}

export default BasicInfo
