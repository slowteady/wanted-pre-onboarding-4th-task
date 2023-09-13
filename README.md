# 이용민 - Week4 - 과제

프리온보딩 4주차에 진행한 과제물입니다.  
기간 : 2023.09.09. ~ 2023.09.13.  

## 👥 팀원

<table border>
  <tbody>
    <tr>
      <td align="center" width="100px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/68311202?s=96&v=4" alt="이용민"/>
        <a href="https://github.com/slowteady">
          <img src="https://img.shields.io/badge/이용민-1E90FF?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

## 실행 방법

1. 로컬 환경에 프로젝트 복사본 생성

```bash
git clone https://github.com/slowteady/wanted-pre-onboarding-4th-task.git
```

2. 프로젝트 폴더로 이동

```bash
cd wanted-pre-onboarding-4th-task
```

3. 환경 설정

```bash
echo "REACT_APP_BASE_URL = http://localhost:3000" > .env
```

4. 프로젝트 종속성 설치

```bash
npm install
```

5. 프로젝트 실행

```bash
npm start
```

## 시연 영상

![gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjB2NXFyeWF4dTNhejY3dzUwMGFjdjUwbXAyZWFqYjhuZGoyM3p4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VNs6EEKiPl2FbfLJoj/giphy.gif)

## 기술 스택

![React](https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=React&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
![styledComponents](https://img.shields.io/badge/styledComponents-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white)

## BEST PRACTICE

### 1. 라이브러리 선정

차트 라이브러리의 종류가 굉장히 많았기 때문에 어떤 라이브러리를 사용할지 고민했습니다.  
라이브러리들의 특징과 장점을 먼저 파악했습니다.

1. Nivo

- 차트 종류가 많다.
- 커스텀 기능이 다양하다.
- 움직임과 전환을 제공한다.
- 서버 사이드 렌더링과 선언형 차트를 지원한다.

2. Recharts

- 간단한 차트를 만들 때 용이하다.
- 속도가 빠르고 코드 적용이 쉽다.
- 리액트스럽게 다룰 수 있다.

3. React-chartjs-2

- 차트 종류가 많다.
- 딥한 커스텀이 가능하다.

고민을 통해 **Recharts** 라이브러리를 선택했습니다.  
간단한 복합 차트를 구현하는것이 요건이었기 때문에  
경량 라이브러리이면서 리액트스럽게 구현할 수 있는 Recharts가 적합하다고 생각했습니다.

### 2. STATE 관리

필터 기능을 필터 버튼, 차트 양쪽에서 사용할 수 있도록 구현하는 것이 요건이었습니다.
필터 state를 전역으로 띄운다면 차트, 필터 버튼 컴포넌트를 부모-자식 관계로 설정할 필요가 없기 때문에  
종속성을 낮추면서 효율적인 컴포넌트 관리를 할 수 있다고 생각했습니다.

#### 구현

```ts
const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({ children }: ChildrenProps) => {
  const [filterIds, setFilterIds] = useState<string[]>([]);

  return <FilterContext.Provider value={{ filterIds, setFilterIds }}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('Cannot find FilterProvider');
  }
  return context;
};
```

위와 같이 filterContext를 통해 useFilter 함수를 호출하여 간단하게 사용할 수 있게 구현했습니다.  

```ts
# Chart.tsx

const Chart = ({ data }: { data: ChartObj[] }) => {
  const { filterIds, setFilterIds } = useFilter();

  const addFilter = (event: CategoricalChartState | null) => {
    if (event && event.activePayload) {
      const barPayloadId = event.activePayload[0].payload.id;
      if (barPayloadId) {
        setFilterIds(
          filterIds.includes(barPayloadId)
            ? filterIds.filter((filterId) => filterId !== barPayloadId)
            : [...filterIds, barPayloadId]
        );
      }
    }
  };

  return (
    .
    .
    .
  )
};
```

```ts
# FilterButtonList.tsx

const FilterButtonList = ({ filterArr }: { filterArr: string[] }) => {
  const { filterIds, setFilterIds } = useFilter();

  const activeToggle = (id: string) => {
    if (filterIds.includes(id)) {
      setFilterIds(filterIds.filter((filterId) => filterId !== id));
    } else {
      setFilterIds([...filterIds, id]);
    }
  };

  const resetFilter = () => {
    setFilterIds([]);
  };

  return (
    .
    .
    .
  );
};
```

차트 컴포넌트, 필터 버튼 컴포넌트에서 useFilter 함수를 호출하여 state를 다뤄서 구현했습니다.

## 프로젝트 구조

```bash
.
└── src/
    ├── api/
    │   ├── axiosInstance.ts
    │   └── requestApi.ts
    ├── components/
    │   ├── charts/
    │   │   ├── custom/
    │   │   │   └── CustomTooltip.tsx
    │   │   └── Chart.tsx
    │   ├── common/
    │   │   └── Loading.tsx
    │   └── filter/
    │       └── FilterButtonList.tsx
    ├── hooks/
    │   └── useMockData.tsx
    ├── icons/
    │   └── location.svg
    ├── page/
    │   └── ChartIndex.tsx
    ├── router/
    │   └── Router.tsx
    ├── state/
    │   └── FilterContext.tsx
    ├── types/
    │   ├── chartData.d.tsx
    │   └── global.d.ts
    ├── App.tsx
    └── index.tsx
```
