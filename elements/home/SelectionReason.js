import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';
import Svgs from '../../src/Svgs';

export default function SelectionReason() {
  return (
    <Box>
      <AppAnimationWhenVisible>
        <Box sx={{px: {md: 25, xs: 2}, bgcolor: '#f3f4f6', py: 5}}>
          <Typography variant='h2' fontWeight='bold' textAlign='center' paddingBottom={3}>Tại sao nên chọn Virasimex ?</Typography>
          <Typography variant='h4'>
            Áp dụng công nghệ vào ngành Xuất khẩu lao động, ABC Hr tạo ra giải pháp xóa bỏ hoàn toàn các trung gian giữa Người lao động và Công ty tiếp nhận. Tham gia chương trình của ABC Hr, các ứng viên có các quyền lợi độc nhất:
          </Typography>
        </Box>
      </AppAnimationWhenVisible>
      <AppAnimationWhenVisible>
        <Grid container sx={{px: {md: 25, xs: 2}, py: 5}}>
          {[{icon: Svgs.Dollar, label: 'Chi phí trọn gói chỉ 2900 USD'}, {icon: Svgs.Info, label: 'Thông tin công khai và chi tiết'}, {icon: Svgs.Notebook, label: 'Hệ thống đào tạo Nhật ngữ bài bản'}, {icon: Svgs.Sales, label: 'Giảm phí cho học viên thi đỗ N4 hoặc tương đương'}, {icon: Svgs.Free, label: 'Miễn phí đào tạo, giới thiệu việc làm sau khi về nước'}, {icon: Svgs.Graduate, label: 'Được cấp bằng cao đẳng Nhật ngữ'}].map((item, index) => {
            return <Grid item sm={4} xs={6} key={`${index}`} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5}}>
              <item.icon />
              <Typography textAlign='center' sx={{px: 2, mt: 2}}>{item.label}</Typography>
            </Grid>;
          })}
        </Grid>
      </AppAnimationWhenVisible>
      <AppAnimationWhenVisible>
        <Grid container sx={{px: {md: 25, xs: 2}, bgcolor: '#f3f4f6', py: 5}}>
          {[{number: 500, label: 'Hồ sơ tiềm năng'}, {number: 100, label: 'Doanh nghiệp đăng ký'}, {number: 1500, label: 'Vị trí đã được nhận'}].map((item, index) => {
            return <Grid item sm={4} xs={6} key={`${index}`} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography textAlign='center' color='primary' fontWeight='bold' sx={{px: 2, fontSize: '3rem'}}>{item.number}+</Typography>
              <Typography textAlign='center' fontWeight='bold' sx={{px: 2}} variant='h5'>{item.label}</Typography>
            </Grid>;
          })}
        </Grid>
      </AppAnimationWhenVisible>
    </Box>
  );
}
