# 学生考勤管理系统

## 项目简介

学生考勤管理系统是一个基于现代 Web 技术的系统，旨在帮助学校和教育机构管理学生的考勤数据。该系统具有以下主要功能：

- **考勤记录**：通过选择班级和月份查看学生的考勤数据。
- **学生管理**：支持添加、编辑和删除学生信息。
- **可视化**：通过柱状图和饼状图展示考勤数据。
- **权限管理**：使用 Kinde 进行用户身份验证。
- **响应式界面**：适配多种设备屏幕尺寸。

---

## 系统架构

### 前端

- **框架**：使用 [Next.js](https://nextjs.org/) 构建。
- **UI 组件库**：自定义组件结合 [Lucide Icons](https://lucide.dev/) 和 CSS 实现。
- **状态管理**：通过 React Hook 管理状态。
- **图表**：使用 [Recharts](https://recharts.org/) 实现数据可视化。

### 后端

- **数据库**：MySQL 数据库，使用 Drizzle ORM 进行数据库操作。
- **API 服务**：采用 Next.js 内置 API 路由，支持 GET、POST 和 DELETE 请求。
- **用户认证**：集成 [Kinde Auth](https://kinde.com/)。

---

## 功能模块

### 1. 学生管理

#### 页面功能
- 显示学生列表，支持按关键字搜索。
- 添加新学生，填写姓名、班级、联系方式和地址。
- 删除学生信息。

#### 主要组件
- `AddNewStudent.jsx`
- `StudentListTable.jsx`

### 2. 考勤管理

#### 页面功能
- 按月份和班级查看学生考勤。
- 手动标记学生的出勤或缺勤。

#### 主要组件
- `AttendanceGrid.jsx`
- `GradeSelect.jsx`
- `MonthSelection.jsx`

### 3. 数据可视化

#### 页面功能
- 使用柱状图展示每日出勤和缺勤人数。
- 使用饼状图展示月度出勤比例。

#### 主要组件
- `BarChartComponent.jsx`
- `PieChartComponent.jsx`

### 4. 仪表盘

#### 页面功能
- 显示当前班级的总人数、出勤率和缺勤率。

#### 主要组件
- `StatusList.jsx`

### 5. 设置

#### 页面功能
- 切换主题模式（浅色、深色和系统）。
- 显示当前登录用户信息并支持注销。

#### 主要组件
- `SettingsPage.jsx`

---

## 数据库结构

### 数据表

1. **`grades` (班级表)**
   - `id` (主键)
   - `grade` (班级名称)

2. **`students` (学生表)**
   - `id` (主键)
   - `name` (学生姓名)
   - `grade` (所属班级)
   - `address` (地址)
   - `contact` (联系方式)

3. **`attendance` (考勤表)**
   - `id` (主键)
   - `studentId` (学生 ID)
   - `present` (是否出勤)
   - `day` (日期中的天数)
   - `date` (月份，如 05/2024)

---

## 安装与运行

### 前置要求
- Node.js 16 或更高版本。
- MySQL 数据库。

### 安装步骤

1. 克隆代码仓库：
   ```bash
   git clone https://github.com/your-repo/student-attendance-management.git
   cd student-attendance-management
   ```

2. 安装依赖包：
   ```bash
   npm install
   ```

3. 配置数据库：
   - 修改 `utils/index.js` 中的数据库连接信息。
   - 确保 MySQL 数据库中存在 `grades`、`students` 和 `attendance` 表。

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

5. 打开浏览器访问 `http://localhost:3000`。

---

## API 文档

### Endpoints

#### 1. 班级管理
- **获取所有班级**
  - `GET /api/grade`

#### 2. 学生管理
- **获取学生列表**
  - `GET /api/student`
- **添加学生**
  - `POST /api/student`
- **删除学生**
  - `DELETE /api/student?id={id}`

#### 3. 考勤管理
- **获取考勤记录**
  - `GET /api/attendance?grade={grade}&month={month}`
- **标记出勤**
  - `POST /api/attendance`
- **标记缺勤**
  - `DELETE /api/attendance?studentId={studentId}&day={day}&date={date}`

#### 4. 仪表盘数据
- **按天统计出勤人数**
  - `GET /api/dashboard?date={date}&grade={grade}`

---

## 注意事项

- 在生产环境中，请确保数据库的密码和敏感信息已被妥善保护。
- 数据库中的日期格式应与 `moment.js` 格式保持一致。

---

## 未来计划

- 增加自动化考勤记录功能。
- 支持学生考勤的导入与导出。
- 提供更加详细的数据分析功能。

