# 캐릭터 이미지 검토 · 2026-11-22

## 검토 방법과 한계

- 기존 18–28장 및 29–39장 자산에서 그리드·마스터·개별 참조 파일 146개를 7개 축소 모음으로 검토했다. 별도로 ch22-final-01~07 PNG를 모음 및 일부 원본으로 확인했다.
- 9인 character-sheet-master.png 및 Sabio-family-master-v1.png는 원본을 확인했다. 분할 WebP의 모든 작은 세부나 본문 삽입 위치를 전수 검수한 것은 아니다.
- 기존 삽화에서 이름과 기준 외형을 연결할 수 있는 11명에 대해 개별 시트를 생성했다. 나머지 텍스트 인물/역할 레코드 30개를 이미지 생성 완료로 처리하지 않았다.

## 고정 기준

Michael, Ridge, Gibby, Ms. Rosario, Mosley, Beejee, Paige는 기존 9인 마스터를 계승한다. Maria, Ian, Shale, Bex는 후기 Sabio 가족 마스터를 계승한다. Bex의 초기 미색 의상과 후기 라벤더 의상 충돌은 후기 기준 우선으로 명시했다.

각 시트는 정면·사선·측면·후면 4방향과 표정 6종이다. 생성 직후 표시된 결과에서 얼굴·머리·나이대·체형·의상 색·신발 잘림·레이아웃을 확인했다. 기존 기준 외형을 위한 제작 자료이며, 원문에 명시되지 않은 특징을 원문 사실로 주장하지 않는다.

## 파일과 후속 생성

- `character-sheets.html`: 이미지 갤러리와 인물별 프롬프트
- `character-sheets.json`: 11개 생성 프롬프트 및 참조 이미지 출처
- `characters.json`: 인물별 visualReference 경로
- `assets/character-sheets/`: PNG 원본 및 웹용 WebP
- `VISUAL-REFERENCE.md`: 후속 삽화 생성 시 참조 절차

생성 도구: 내장 image_gen. 11개 개별 호출. 기존 장면 삽화는 이번 작업에서 교체하지 않았다.
