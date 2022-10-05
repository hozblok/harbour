import mockAxios from 'jest-mock-axios'

import { FAQStore } from './FAQStore'

describe('FAQStore', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.spyOn(window, 'alert').mockImplementation(() => {})
  })

  afterEach(() => {
    mockAxios.reset()
  })

  describe('when API call is successful', () => {
    it('should collect faq list', async () => {
      // given
      const data = {
        scholarship: {
          faqs: {
            items: [
              {
                type: 'Application process',
                question:
                  'What happens once I conduct the interview with Harbour.Space?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'We will compile your results to present to the University’s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.',
                  },
                ],
              },
              {
                type: 'Application process',
                question: 'When will I know the outcome of my application?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'After your interview with the Admissions Office, you will be notified about whether you’re moving to the next stage of the application process within the next 10 calendar days. If there are any changes in the timeline, you will be informed by your Admissions Officer.',
                  },
                ],
              },
              {
                type: 'Programme conditions',
                question:
                  'How many hours will I dedicate to the classes, homework and internship?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'Harbour.Space programmes are designed for full-time, year-round intensive study, divided into a 3-week module format, one subject at a time.',
                  },
                  {
                    type: 'paragraph',
                    data:
                      'Classes are scheduled for three hours a day, five days a week, for a total of 48 contact hours including examinations, which means that studying requires active participation and maximum concentration.',
                  },
                  {
                    type: 'paragraph',
                    data:
                      'Lectures are held every day either in the morning or in the afternoon, and the final candidate is expected to spend 4-6 hours a day on their internship.',
                  },
                  {
                    type: 'paragraph',
                    data:
                      'Please be aware that you will have to coordinate your weekly schedule with the company and University.',
                  },
                ],
              },
              {
                type: 'Programme conditions',
                question:
                  "Can I start by studying/working remotely if I'm not able to be physically present?",
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'Since all of our classes are designed to be delivered in a hybrid format (online and offline), online classes will still be an option for the 2020-2021 academic year until further notice. Whether working remotely is possible or not has to be discussed with the company.',
                  },
                ],
              },
              {
                type: 'Apprenticeship conditions',
                question: 'Will I sign an internship contract?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'Yes. Either you will sign an internship contract directly with the company or a three-party agreement between the company, the University and yourself.',
                  },
                ],
              },
              {
                type: 'Application process',
                question: 'Is the application fee refundable?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'The application fee for Harbour.Space is a non-refundable sum of 125€. This fee guarantees that we maintain the highest possible standard of assessment and screening process. Ultimately, you are applying to a highly competitive Apprenticeship opportunity.',
                  },
                ],
              },
              {
                type: 'Apprenticeship conditions',
                question: 'Will I be provided with accommodation?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'No. Students are expected to find their own accommodation. We can also recommend some student organizations that could help you with finding accommodation.',
                  },
                  {
                    type: 'paragraph',
                    data:
                      'Here are some websites and apps that may help you find a room or a flat: Badi, Idealista, Fotocasa, Facebook groups.',
                  },
                ],
              },
              {
                type: 'Apprenticeship conditions',
                question: 'Will I get aa visa?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'All students from non-European Union countries, non-European Economic Area member state countries and not from the Swiss Confederation must obtain a student visa. The student visa allows the holder to remain in Spain in order to seek studies, research, and internship programmes.',
                  },
                ],
              },
              {
                question:
                  'What happens if I can’t arrive for the starting date?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'In general the company sets the earliest starting date, which can be found at the top of the website. As the university has a rolling admissions policy, enrollment to the class is possible every 3 weeks. Therefore, the starting date can be flexible.',
                  },
                ],
                type: 'Apprenticeship conditions',
              },
              {
                type: 'Apprenticeship conditions',
                question: 'Is my living allowance negotiable?',
                answer: [
                  {
                    type: 'paragraph',
                    data:
                      'If you’re selected for the apprenticeship by the company, you’ll have the time to talk and agree on this number with the company itself.',
                  },
                ],
              },
            ],
          },
        },
      }
      mockAxios.get.mockResolvedValueOnce({ data: data })

      // when
      const store = new FAQStore()
      await store.init()

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(FAQStore.URL)
      expect(store.items.length).toBe(10)
      expect(store.types.length).toBe(3)
      expect(store.filter).toBeNull()
      expect(store.items).toEqual([
        {
          type: 'Application process',
          question:
            'What happens once I conduct the interview with Harbour.Space?',
          answer:
            'We will compile your results to present to the University’s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.',
          opened: false,
        },
        {
          type: 'Application process',
          question: 'When will I know the outcome of my application?',
          answer:
            'After your interview with the Admissions Office, you will be notified about whether you’re moving to the next stage of the application process within the next 10 calendar days. If there are any changes in the timeline, you will be informed by your Admissions Officer.',
          opened: false,
        },
        {
          type: 'Programme conditions',
          question:
            'How many hours will I dedicate to the classes, homework and internship?',
          answer:
            'Harbour.Space programmes are designed for full-time, year-round intensive study, divided into a 3-week module format, one subject at a time. Classes are scheduled for three hours a day, five days a week, for a total of 48 contact hours including examinations, which means that studying requires active participation and maximum concentration. Lectures are held every day either in the morning or in the afternoon, and the final candidate is expected to spend 4-6 hours a day on their internship. Please be aware that you will have to coordinate your weekly schedule with the company and University.',
          opened: false,
        },
        {
          type: 'Programme conditions',
          question:
            "Can I start by studying/working remotely if I'm not able to be physically present?",
          answer:
            'Since all of our classes are designed to be delivered in a hybrid format (online and offline), online classes will still be an option for the 2020-2021 academic year until further notice. Whether working remotely is possible or not has to be discussed with the company.',
          opened: false,
        },
        {
          type: 'Apprenticeship conditions',
          question: 'Will I sign an internship contract?',
          answer:
            'Yes. Either you will sign an internship contract directly with the company or a three-party agreement between the company, the University and yourself.',
          opened: false,
        },
        {
          type: 'Application process',
          question: 'Is the application fee refundable?',
          answer:
            'The application fee for Harbour.Space is a non-refundable sum of 125€. This fee guarantees that we maintain the highest possible standard of assessment and screening process. Ultimately, you are applying to a highly competitive Apprenticeship opportunity.',
          opened: false,
        },
        {
          type: 'Apprenticeship conditions',
          question: 'Will I be provided with accommodation?',
          answer:
            'No. Students are expected to find their own accommodation. We can also recommend some student organizations that could help you with finding accommodation. Here are some websites and apps that may help you find a room or a flat: Badi, Idealista, Fotocasa, Facebook groups.',
          opened: false,
        },
        {
          type: 'Apprenticeship conditions',
          question: 'Will I get aa visa?',
          answer:
            'All students from non-European Union countries, non-European Economic Area member state countries and not from the Swiss Confederation must obtain a student visa. The student visa allows the holder to remain in Spain in order to seek studies, research, and internship programmes.',
          opened: false,
        },
        {
          type: 'Apprenticeship conditions',
          question: 'What happens if I can’t arrive for the starting date?',
          answer:
            'In general the company sets the earliest starting date, which can be found at the top of the website. As the university has a rolling admissions policy, enrollment to the class is possible every 3 weeks. Therefore, the starting date can be flexible.',
          opened: false,
        },
        {
          type: 'Apprenticeship conditions',
          question: 'Is my living allowance negotiable?',
          answer:
            'If you’re selected for the apprenticeship by the company, you’ll have the time to talk and agree on this number with the company itself.',
          opened: false,
        },
      ])
    })
  })

  describe('when API call fails', () => {
    it('should show alert message', async () => {
      const store = new FAQStore()
      const message = 'Network Error'
      mockAxios.get.mockRejectedValueOnce(new Error(message))
      await store.init()
      expect(console.error).toHaveBeenCalled()
      expect(window.alert).toHaveBeenCalled()
    })
  })
})
